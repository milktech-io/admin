import jwt from "jsonwebtoken";

class Token {

	get = ()=>{
		return localStorage.getItem('token')
	}

	getPublic(){
		return  process.env.REACT_APP_JWT_SECRET;
	}

	json = ()=>{
		return this.decode(localStorage.getItem('token')||'');
	}
	decode = (token)=>{
		try{
		   return jwt.decode(token);
		}
		catch(e){
			return false;
		}
	}

	set = (token)=>{
		return localStorage.setItem('token', token);
	}

	check = ()=>{
		let token = this.get();

		if(!token)
			return false;

		let response = this.decode(token);

		if(!response){
			this.destroy();
			return false;
		}

	    if (response.exp <= (new Date().getTime() ) / 1000) 
	    {
			this.destroy();
	    	return false;
	    }	

	    return response;

	}

	destroy = ()=>{
		return localStorage.removeItem('token')
	}


}

export default  (new Token()) ;
