function Percobaan13() {
    return (
        <div>
            <div className="container py-4 mx-auto">
                <div className="grid float-right grid-cols-1 grid-rows-1 text-lg text-slate-400">
                    <p>I already have account <a className="ml-2 text-lg font-bold text-teal-400" href="#">Sign in <b className="text-2xl">&rarr;</b> </a> </p>
                </div>   
                <Judul/>
            </div>
            <Register/>      
        </div>
    ); 
}

//fungsi untuk memuat header
function Judul(){
    return(
        <div className="grid h-32 grid-rows-1 mt-32 ">
            <h1 className="font-semibold text-7xl">Sign up to Awesome</h1>
        </div>    
    );
}

//fungsi untuk memuat component form Login
function Register(){
    return(
        <div className="container mx-auto">
            <form className='ml-14' action="#">
                <input type="text" className="w-2/5 py-4 mr-4 text-lg border rounded-md border-slate-300 hover:border-indigo-300 px-11 text-slate-500" placeholder="your email ..." />
                <input type="text" className="w-2/5 py-4 text-lg border rounded-md border-slate-300 hover:border-indigo-300 px-11 text-slate-500" placeholder="your name ..." /> 
                <SocialRegister/>  
                <ButtonRegister/>
            </form>
        </div>
    );
}

//fungsi untuk membuat alternatif login menggunakan social media
function SocialRegister() {
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center space-x-6">
                <div className="shrink-0">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Current profile photo" />
                </div>
                <label label className="block">
                    <a href="https://accounts.google.com/">
                        <span>Sign up with Google <b className="ml-8">|</b></span>
                    </a>
                </label>
                <div className="shrink-0">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png" alt="Current profile photo" />
                </div>
                <label className="block">
                    <a href="https://www.facebook.com/"><span>Sign up with Facebook</span></a>
                </label>
            </div>
        </div>
    );
}

//fungsi untuk memuat component call to action Button
function ButtonRegister(){
    return(
        <div className="grid mt-16 -ml-64 justify-items-center">
            <button className="px-4 py-4 text-lg text-white bg-teal-400 hover:bg-teal-600 text-semibold mt-30">Create Account</button>
        </div>
    );
}

export default Percobaan13;
