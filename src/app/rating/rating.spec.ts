import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rating} from './rating';

describe('Rating', () => {
  let component: Rating;
  let fixture: ComponentFixture<Rating>;
  describe('Rating',()=>{
    it('Create an instance',()=>{
      const pipe = new Rating();
      expect(pipe).toBeTruthy()
    });

    it('Should display Average',()=>{
      let pipe = new Rating();
      let val = pipe.transform(2);
      expect(val).toBe('Average');
    });
    it('Should display Good',()=>{
        let pipe = new Rating();
        let val = pipe.transform(4);
        expect(val).toBe('Good');
      });
      it('Should display Very Good',()=>{
        let pipe = new Rating();
        let val = pipe.transform(4.5);
        expect(val).toBe('Very Good');
      });
    it('Should display Excellent',()=>{
        let pipe = new Rating();
        let val = pipe.transform(5);
        expect(val).toBe('Excellent');
      });

  })
});
