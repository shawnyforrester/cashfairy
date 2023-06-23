import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('AuthService', () => {
  // TODO: spy on other methods too
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    authServiceSpy =  jasmine.createSpyObj(AuthService, ['login', 'register', 'logout']);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    });   


      //This tests the registration method
  it('should call the register method', () => {
    const first_name = 'testname';
    const last_name = 'lastname';
    const username = 'testuser';
    const password = 'testpassword';
    const email = 'testemail';
    const city = 'testcity';
    const telephone = 'testtelephone';
    const role = 'testrole';
    const expectedResponse = { token: 'testtoken' };
  
    // Set up the spy and return the mock response
    authServiceSpy.register.and.returnValue(asyncData(expectedResponse));
  
    // Inject the service and call the method
    const authService = TestBed.inject(AuthService);
    authService.register(first_name, last_name, username, password, email, city, telephone, role).subscribe(response => {
      expect(response).equal(expectedResponse);
    });
  
    // Verify that the method was called with the correct arguments
    expect(authServiceSpy.register).calledOnceWith(first_name, last_name, username, password, email, city, telephone, role);
  });

  
  //this test will test the login method
    it('should call the login method', () => {
      const username = 'testuser';
      const password = 'testpassword';
      const expectedResponse = { token: 'testtoken' };
    
      // Set up the spy and return the mock response
      authServiceSpy.login.and.returnValue(asyncData(expectedResponse));
    
      // Inject the service and call the method
      const authService = TestBed.inject(AuthService);
      authService.login(username, password).subscribe(response => {
        expect(response).equal(expectedResponse);
      });
    
      // Verify that the method was called with the correct arguments
      expect(authServiceSpy.login).calledOnceWith(username, password);
    });
    
  });


  
  
});



function asyncData(expectedResponse: { token: string; }): import("rxjs").Observable<any> {
  throw new Error('Function not implemented.');
}

// Creating a spy to mimic an http request

/**
 * let httpClientSpy: jasmine.SpyObj<HttpClient>;
 * 
 * before(()=> {
 *      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
 * 
 *      RegistrationComponent = new RegistrationComponent(httpClientSpy);
 *      
 *       Since httpClient works with observables and asynchronous requests
 *       we call done() when async operations are complete
 *       
 *        asyncData
 *        
 *       const asyncData: Type = {
 *        //data here
 *        property: value,
 *        property: value,
 *       property: value,
 * }
 *       httpClientSpy.get.and.returnValue(asyncData({}));--the value here is the same
 *       as the value returned from the service.
 * 
 *        component.method().subscribe({
 *         next: (data) => {
 *         expect(data).toEqual(asyncData);
 *        done();
 * })
 *        error: done.fail
 * 
 *        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
 * 
 */
