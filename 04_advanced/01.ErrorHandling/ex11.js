/**
 * 잡아서 처리한 예외는 다시 던질 수 있다.
 */

/**
 * 아래 예제에서 Controller 계층에서 오류를 잡아서 사용자에게 얼럿을 보여주었다.
 * 하지만 UserDataService 레이어에서 오류를 로그로 남기려는 요구사항이 있을 수 있다.
 * 이럴 때, 예외를 잡아서 처리하고 다시 던지면 된다.
 */
class MainController {
    constructor(view, service) {
        this.view = view;
        this.service = service;
    }

    drawUserDataGraph() {
        try {
            const data = this.service.getUserData();
            this.view.drawUserDataGraph(data);
        } catch (error) {
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
        console.log(`${new Date().toUTCString()} => ${error.name} :: ${error.message}`);
    }
}

class UserDataService {
    constructor(repository, logger) {
        this.repository = repository;
        this.logger = logger;
    }
    getUserData() {
        try {
            return this.repository.fetchUserData();
        } catch (error) {
            // 필요한 작업을 수행하고 
            this.logger.logError(error);
            // 다시 오류를 던집니다.
            throw error;
        }
        
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

class DBConnectionError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function program() {
    const logger = new Logger();
    const repository = new UserDataRepository(new UserDataDBProvider());
    const service = new UserDataService(repository, logger);
    const mainView = new MainView();
    const mainController = new MainController(mainView, service);
    mainController.drawUserDataGraph();
}

program();