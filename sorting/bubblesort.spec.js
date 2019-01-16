describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an array of a single item', function(){
      expect( bubbleSort([1]) ).toEqual( [1] );
    });
  });

  describe('Bubble Sort', function(){
    it('handles an array of multiple items', function(){
      expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
    });
  });