const expect = require('chai').expect;

const authMiddleware = require('../middlewares/is-auth')

describe('Auth Middleware' , function(){
    it('should throw an error if no authorization header is present', function () {
        const req = {
            get : function(header) {
               return null;
            }
        };
        expect(authMiddleware.bind(
            this,req,{},() => {}
            )
          ).to.throw(
              'Not authenticated'
            )
    })

    it('error if only one string is there' , function() {
        const req = {
            get : function(header) {
                return 'abc';
            }
        };
        expect(authMiddleware.bind(
            this, req, {}, () => {}
            )
          ).to.throw();
    
    })
})


