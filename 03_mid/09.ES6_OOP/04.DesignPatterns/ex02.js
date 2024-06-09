/**
 * Singleton Pattern
 * - 항상 인스턴스가 특정 n개만 존재할 수 있도록 보장한다.
 * - 주로 1개의 인스턴스만 필요할 때, Singletone 패턴을 많이 사용한다.
 */

class ConfigurationManager {
    static #instance;
    static get shared() {
      if (ConfigurationManager.#instance) {
        return ConfigurationManager.#instance;
      }
      ConfigurationManager.#instance = new ConfigurationManager();
      return ConfigurationManager.#instance;
    }

    #settings = {};
  
    // 자바스크립트는 constructor를 private으로 만들 수 없다.
    // 외부에서 new ConfigurationManager() 을 실행하면
    // ConfigurationManager.#instance 에 this 포인터를 설정하여
    // 다음 new ConfigurationManager()를 해도 항상 동일한 객체를 사용하도록 한다.
    constructor() {
      if (ConfigurationManager.#instance) {
        return ConfigurationManager.#instance;
      }  
      ConfigurationManager.#instance = this;
    }
  
    setSetting(key, value) {
      this.#settings[key] = value;
    }
  
    getSetting(key) {
      return this.#settings[key];
    }
  }
  
  const configManager1 = ConfigurationManager.shared;
  configManager1.setSetting('apiEndpoint', 'https://api.example.com');
  
  const configManager2 = ConfigurationManager.shared;
  console.log(configManager2.getSetting('apiEndpoint'));
  
  configManager2.setSetting('timeout', 3000);
  console.log(configManager1.getSetting('timeout'));
  
  console.log(configManager1 === configManager2);
  
  // 개발자가 실수를 해도 동일한 인스턴스를 사용할 수 있게 한다.
  const c1 = new ConfigurationManager();
  const c2 = new ConfigurationManager();
  console.log(c1 === c2);