
export function Registro(){
    return(
        <div className="grid bg-black-800 h-screen">
        <div className="grid grid-cols-2 h-full ">
            <div className="flex justify-center items-center bg-black w-70 ">
                <form className="h-4/5 w-4/5 shadow-md rounded-custom px-8 pt-8 pb-10 mb-6 justify-center bg-white text-left" style={{ borderRadius: '28.516px' }}>
                <h1 className="font-serif mb-32 mt-16 text-7xl flex justify-center text-center text-gray-900">
                        <img
                            className=" w-42"
                            src="/public/Taskborne.png"
                            alt=""
                        />TaskBorne</h1>

                    <div className="mb-6 px-8 ">
                        <label className="block text-gray-700 text-lg font-mountainsofchristmas mb-2">Username</label>
                        <input
                            type="username"
                            id="username"
                            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="jackdojs"
                            required
                        />
                    </div>
                    <div className="mb-6 px-8 ">
                        <label className="block text-gray-700 text-lg font-mountainsofchristmas mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="name@admin.com"
                            required
                        />
                    </div>

                    <div className="mb-16  px-8">
                        <label className="block text-gray-700 text-lg font-mountainsofchristmas mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="**********"
                            required
                        />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>

                    <div className="grid justify-items-center gap-10">
                        <button
                            className="bg-[url('/public/images.png')] bg-center bg-cover border-2 border-white text-white rounded-full py-2 px-40 focus:outline-none focus:shadow-outline"
                            style={{ borderRadius: '31px' }}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-[url('/public/bloodborne2.png')] bg-no-repeat bg-cover w-full"></div>
        </div>
    </div>

    )
}