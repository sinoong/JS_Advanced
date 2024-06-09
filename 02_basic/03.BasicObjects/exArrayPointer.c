/**
 * 배열 인덱스는 왜 0부터 시작할까?
 * 
 * https://cplayground.com/ 
 * 위 사이트에서 아래 코드를 실행할 수 있습니다.
 */

#include <stdio.h>
#include <stdlib.h>

int main() {
    int items[] = { 1, 2, 3, 4, 5 };

    int *nextItemPtr = items + 1;
    int *thirdItemPtr = items + 2;

    printf("%ld\n\n", sizeof(int));
    
    printf("%p\n", items);
    printf("%p\n", nextItemPtr);
    printf("%p\n", thirdItemPtr);
    
    printf("\n\n");
    
    printf("%d\n", *items);
    printf("%d\n", *nextItemPtr);
    printf("%d\n", *thirdItemPtr);
    
    printf("\n\n");
    
    printf("%d\n", items[0]);
    printf("%d\n", items[1]);
    printf("%d\n", items[2]);
    
    
    printf("\n\n");
    
    printf("%p\n", &items[0]);
    printf("%p\n", &items[1]);
    printf("%p\n", &items[2]);
    
    printf("\n\n");
    
    
    printf("%d\n", *(items + 0));
    printf("%d\n", *(items + 1));
    printf("%d\n", *(items + 2));
    
    return 0;
}