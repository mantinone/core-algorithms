#include <iostream>

int* bubbleSort( int*, int  );

int* bubbleSort( int* initialSet, int length )
{
  int end = length;
  int* sortSet;

  for( int i = 0; i < length; i++)
  {
    sortSet[i] = initialSet[i];
  }

  while(end > 1)
  {
    for( int i = 1; i < end; i++)
    {
      if( initialSet[i-1] > initialSet[i] )
      {
        int temp = initialSet[i];
        initialSet[i] = initialSet[i-1];
        initialSet[i-1] = temp;
      }
    }
    end--;
  }

  return sortSet;
}

int main()
{
  int unsorted[10] = { 4, 3, 1, 5, 7, 9, 10, 8, 2, 6 };
  int* result = bubbleSort( unsorted, 10);
  for( int i = 0; i < 10; i++)
  {
    std::cout << result[i] << std::endl;

  }

  system("read");
  
  return 0;
}
