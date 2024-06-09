/**
 * Result 타입과 모나드(Monad)
 */

class Result {
  static ok(value) {
    return new OkResult(value);
  }

  static error(error) {
    return new ErrorResult(error);
  }

  get isOk() {
    throw new Error('구현해 주세요');
  }

  get isError() {
    throw new Error('구현해 주세요');
  }

  /**
   * map은 사이드이펙트가 없는 순수함수(fn)만 받는다.
   */
  map(fn) {
    throw new Error('구현해 주세요');
  }

  /**
   * flatMap은 사이드이펙트가 있는 함수(fn)를 받을 수 있다.
   * 비동기 실행을 지원한다.
   */
  async flatMap(fn) {
    throw new Error('구현해 주세요');
  }

  unwrap() {
    throw new Error('구현해 주세요');
  }
}

class OkResult extends Result {
  constructor(value) {
    super();
    this.value = value;
  }

  get isOk() {
    return true;
  }

  get isError() {
    return false;
  }

  map(fn) {
    return Result.ok(fn(this.value));
  }

  async flatMap(fn) {
    // 사이드이펙트를 처리한다.
    try {
      // 사이드이펙트를 처리하고 결과를 항상 Result 타입으로 반환하는 함수를
      // 사용하기 때문에 다시 Result.ok 로 감싸지 않는다.
      // 만약 감싸게 된다면 Result.ok(Result.ok(value)) 처럼
      // Result 타입이 겹겹이 쌓이게 된다.
      const result = await fn(this.value);
      if (result instanceof Result) {
        return result;
      }
      return Result.ok(result);
    } catch (error) {
      // 오류가 발생하면 Result.error를 반환한다.
      return Result.error(error);
    }
  }

  unwrap() {
    return this.value;
  }
}

class ErrorResult extends Result {
  constructor(error) {
    super();
    this.error = error;
  }

  get isOk() {
    return false;
  }

  get isError() {
    return true;
  }

  // 오류는 항상 오류로 남겨둔다
  map(fn) {
    return this;
  }

  async flatMap(fn) {
    return this;
  }

  unwrap() {
    return this.error;
  }
}


/**
 * Result 타입을 적용해서 오류를 처리해 보자.
 */
class MainController {
  constructor(view, service) {
    this.view = view;
    this.service = service;
  }

  async drawUserDataGraph() {
    const result = await this.service.getUserData();
    if (result.isOk) {
      const data = result.unwrap();
      this.view.drawUserDataGraph(data);
    } else {
      const error = result.unwrap();
      window.alert(`${error.name} :: ${error.message}`);
    }
  }
}

class MainView {
  drawUserDataGraph(data) {
    console.log(`${JSON.stringify(data, null, 2)}를 사용해 사용자 데이터 그래프를 그립니다.`);
  }
}

class Logger {
  logError(error) {
    console.log('로그 서버에 아래 메시지를 기록합니다.');
    console.log(
      `${new Date().toUTCString()} => ${error.name} :: ${error.message}`
    );
  }
}

class UserDataService {
  constructor(repository, logger) {
    this.repository = repository;
    this.logger = logger;
  }
  async getUserData() {
    const result = await this.repository.fetchUserData();
    if (result.isError) {
      const error = result.unwrap();
      // 필요한 작업을 수행하고
      this.logger.logError(error);
    }
    // 다시 오류를 반환합니다.
    return result;
  }
}

class UserDataRepository {
  constructor(provider) {
    this.provider = provider;
  }
  fetchUserData() {
    return this.provider.queryUserData();
  }
}

class UserDataFileProvider {
  queryUserData() {
    // 파일을 읽어서 아래 데이터를 반환한다고 가정합니다.
    return { name: 'CodingMax', age: 10 };
  }
}

class UserDataDBProvider {
  queryUserData() {
    // DB를 쿼리하여 아래 데이터를 반환하려고 했지만
    // DB 연결 오류가 발생하여 예외를 던진다고 가정합니다.
    throw new DBConnectionError('DB에 연결할 수 없습니다');
  }
}

class JsonPlaceholderProvider {
  async fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async fetchUserListData() {
    return Result.ok(
      'https://jsonplaceholder.typicode.com/users'
    ).flatMap((url) => this.fetchData(url));
  }

  async fetchUserData(user) {
    return Result.ok(
      `https://jsonplaceholder.typicode.com/users/${user.id}`
    ).flatMap((url) => this.fetchData(url));
  }

  async queryUserData() {
    const userListResult = await this.fetchUserListData();
    return userListResult.flatMap((userList) => {
      const firstUser = userList[0];
      return this.fetchUserData(firstUser);
    });
  }
}

class DBConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

async function program() {
  const logger = new Logger();
  const repository = new UserDataRepository(new JsonPlaceholderProvider());
  const service = new UserDataService(repository, logger);
  const mainView = new MainView();
  const mainController = new MainController(mainView, service);
  await mainController.drawUserDataGraph();
}

(async () => {
  await program();
})();


/**
 * 지금까지 적용해본 Result 타입은 함수형 프로그래밍에서 자주 언급되는
 * 모나드를 간략하게 구현해 본 것이다.
 * 모나드는 사이드 이펙트를 관리하는 기술로 함수의 반환값을 한 차례 더
 * 추상화해서 [함수의 정상적인 반환값과, 사이드이펙트 발생시 반환값]
 * 을 감싼 데이터타입니다.
 * 이는 튜플로 [함수반환값, 오류값]을 반환하던 것과 비슷하다.
 * 
 * 입력에서 부터 의미 있는 결과값을 만들기 위해 여러 함수 호출이 필요한 경우
 * 함수 호출 체이닝을 통해서 결과값을 만들 수 있도록 map과 flatMap을 제공한다. 
 * 이 때, flatMap의 역할은 사이드 이펙트를 관리하면서 함수 호출 체이닝을 이어갈 수 
 * 있도록 하는 것이다.
 * 자바스크립트 개발자에게 익숙한 것으로는 
 * 다음 시간에 배울 Promise가 일종의 모나드이고
 * Promise의 then 메서드가 flatMap과 map 역할을 하는 것이다.
 */