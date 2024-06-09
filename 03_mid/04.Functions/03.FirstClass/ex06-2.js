
/**
 * 함수 일급 객체의 중요성
 * 1. 위 예제처럼 로직의 공통부분을 데이터의 값처럼 재사용할 수 있습니다.
 * 2. 함수 실행을 지연할 수 있습니다. 함수를 데이터의 값처럼 미리 만들어 놓고 필요할 때 실행할 수 있습니다.
 * 2-1. 특정 조건에 따라 필요한 로직만 골라서 실행할 수도 있고
 * 2-2. Promise.all 처럼 비동기 로직을 미리 만들어 놓고 필요한 시점에 한 번에 동시에 실행할 수도 있습니다.
 * 2-3. 이렇게 되면 모든 필요한 로직을 담은 함수들을 변수에 담아 놓고
 * 2-4. 로직에 따라 체이닝을 달리 해서 호출할 수도 있고 
 * 2-5. 최적화를 적용할 수도 있습니다.
 */
const grayFilter = function (image, w, h, callback) {
    console.log('이미지에 Gray 필터를 적용합니다.');
    setTimeout(() => {
      const result = `${image} => [GRAY FILTER]::${w}x${h}`;
      console.log('이미지에 Gray 필터 적용을 완료 했습니다');
      callback({ result, w, h });
    }, w + h);
  };
  
  const cropFilter = function (image, w, h, callback) {
    console.log('이미지에 Crop 필터를 적용합니다.');
    setTimeout(() => {
      const result = `${image} => [CROP]::${w}x${h}`;
      console.log('이미지에 Crop 필터 적용을 완료 했습니다');
      callback({ result, w, h });
    }, w + h);
  };
  
  // 이렇게 작성해도 되지만 최적화를 적용할 수 있다.
  function process1(filter, crop) {
    console.group(process1.name);
    console.time(process1.name);
    filter('flower.jpg', 500, 500, (img1) => {
      crop(img1.result, 10, 10, (img2) => {
        console.log(img2.result);
        console.log(img2.w, img2.h);
        console.timeEnd(process1.name);
        console.groupEnd();
      });
    });
  }
  process1(grayFilter, cropFilter);
  

  // 크롭 필터가 있는지 검사하여 
  function process2(filter1, filter2) {
    const usingCropFilter =
      filter1.name === 'cropFilter'
        ? filter1
        : filter2.name === 'cropFilter'
        ? filter2
        : null;
  
    if (usingCropFilter) {
      const otherFilter = usingCropFilter === filter2 ? filter1 : filter2;
      console.group(process2.name);
      console.time(process2.name);
      usingCropFilter('flower.jpg', 10, 10, (img1) => {
        otherFilter(img1.result, 10, 10, (img2) => {
          console.log(img2.result);
          console.log(img2.w, img2.h);
          console.timeEnd(process2.name);
          console.groupEnd();
        });
      });
    } else {
      console.group(process2.name);
      console.time(process2.name);
      filter1('flower.jpg', 500, 500, (img1) => {
        filter2(img1.result, 10, 10, (img2) => {
          console.log(img2.result);
          console.log(img2.w, img2.h);
          console.timeEnd(process2.name);
          console.groupEnd();
        });
      });
    }
  };
  
  process2(grayFilter, cropFilter);
  