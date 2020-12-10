const expect = require('chai').expect;
const jwt = require('jsonwebtoken');
const sinon = require('sinon');

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

    it('after decoding the token it should yield a userId', function() {
        const req = {
          get: function(header) {
            return 'Bearer jjkkkjohuhi';
          }
        };
        sinon.stub(jwt, 'verify');
        jwt.verify.returns({ 
            userId: 'abc'
         });
        authMiddleware(req, {}, () => {});
        expect(req).to.have.property('userId');
        expect(req).to.have.property('userId', 'abc');
        expect(jwt.verify.called).to.be.true;
        jwt.verify.restore();
      });
    
      it('should throw an error if the token cannot be verified', function() {
        const req = {
          get: function(header) {
            return 'Bearer abc';
          }
        };
        expect(authMiddleware.bind(
            this, req, {}, () => {}
            )
         ).to.throw();
    });
})


