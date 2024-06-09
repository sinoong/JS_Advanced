/**
 * 다른 사이드 이펙트를 담은 코드를 실행할 수 있는
 * flatMap 을 구현해 보자.
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
   * 사용자의 데이터를 가져오는 예제
   */
  function userListUrl() {
    return Result.ok('https://jsonplaceholder.typicode.com/users');
  }
  
  function userUrl(user) {
    return Result.ok(`https://jsonplaceholder.typicode.com/users/${user.id}`);
  }
  
  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function fetchFirstUserData() {
    const userListResult = await userListUrl().flatMap((url) => fetchData(url));
    return userListResult.flatMap((userList) => {
      const firstUser = userList[0];
      return userUrl(firstUser).flatMap((url) => fetchData(url));
    });
  }
  
  (async () => {
    const result = await fetchFirstUserData();
    if (result.isOk) {
      const data = result.unwrap();
      console.log('첫번째 사용자 데이터를 가져왔습니다.');
      console.log(data);
    } else {
      const error = result.unwrap();
      console.error('오류가 발생했습니다.');
      console.error(error.message);
    }
  })();