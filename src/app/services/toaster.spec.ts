import { TestBed } from '@angular/core/testing';
import { Toaster } from './toaster';
import { HotToastService } from '@ngxpert/hot-toast';

describe('Toaster Service', () => {
  let service: Toaster;
  let hotToastSpy: jasmine.SpyObj<HotToastService>;

  beforeEach(() => {
    hotToastSpy = jasmine.createSpyObj('HotToastService', ['success', 'error']);

    TestBed.configureTestingModule({
      providers: [
        Toaster,
        { provide: HotToastService, useValue: hotToastSpy },
      ],
    });

    service = TestBed.inject(Toaster);
  });

  it('calls HotToastService.success with the provided message', () => {
    service.success('Saved!');
    expect(hotToastSpy.success).toHaveBeenCalledWith('Saved!');
  });

  it('calls HotToastService.error with the provided message', () => {
    service.error('Failed!');
    expect(hotToastSpy.error).toHaveBeenCalledWith('Failed!');
  });

  it('emits and logs values from testingObserve()', () => {
    const logSpy = spyOn(console, 'log');
    const errorSpy = spyOn(console, 'error');

    service.testingObserve();

    expect(logSpy).toHaveBeenCalledWith(
      'observer got a next value: Hello World!'
    );
    expect(logSpy).toHaveBeenCalledWith(
      'observer got a next value: Hello Again!'
    );
    expect(logSpy).toHaveBeenCalledWith(
      'observer got a complete notification'
    );
    expect(errorSpy).not.toHaveBeenCalled();
  });
});
