/**
 * 오류 전파의 중요성
 */

/**
 * 던져진 오류 또는 예외는 호출 스택을 거슬러 올라가며 try-catch 문을 만날 때까지
 * 전파된다.
 * 그렇기 때문에 오류 처리를 최대한 늦춰서 한 곳에서 오류를 처리할 수 있다.
 * 예를 들어, Data 를 DB에 요청하다가 오류가 발생했을 때, UI로 알려줘야할 필요가 있다.
 * 보통 프로그램을 계층으로 나누어 구현하기 때문에 아래와 같이 앱의 계층이 나뉘어져 있을 것이다.
 * UI(Presenter) - Service(Business) - Repository(Data)
 */
{
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
            console.log(`${data}를 사용해 사용자 데이터 그래프를 그립니다.`);
        }
    }
    
    class UserDataService {
        constructor(repository) {
            this.repository = repository;
        }
        getUserData() {
            return this.repository.fetchUserData();
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
        const repository = new UserDataRepository(new UserDataFileProvider());
        const service = new UserDataService(repository);
        const mainView = new MainView();
        const mainController = new MainController(mainView, service);
        mainController.drawUserDataGraph();
    }

    program();
}

/**
 * DBConnectionError 오류가 발생했을 때, MainController가 아닌 곳에서 오류를 캐치해서
 * 처리하면 UI 에서 오류 내용을 보여주기 위해서 개발자가 직접 관련 처리를 해줘야 한다.
 * 오류를 MainController까지 전달하기 위해서 불피요한 코드 작업이 필요하다.
 * 이럴 때, 오류 처리를 늦춰서 UI 계층에서 오류를 잡아서 처리하면 쉽게 문제를 해결할 수 있다.
 */

{
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
            console.log(`${data}를 사용해 사용자 데이터 그래프를 그립니다.`);
        }
    }
    
    class UserDataService {
        constructor(repository) {
            this.repository = repository;
        }
        getUserData() {
            return this.repository.fetchUserData();
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
            return '사용자A, 사용자B, 사용자C';
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
        const repository = new UserDataRepository(new UserDataDBProvider());
        const service = new UserDataService(repository);
        const mainView = new MainView();
        const mainController = new MainController(mainView, service);
        mainController.drawUserDataGraph();
    }

    program();
}