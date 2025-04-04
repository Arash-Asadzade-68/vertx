

const users = [
  {
    avatar:'',
    id:'1',
    name:'Arash'
  },
  {
    avatar:'',
    id:'2',
    name:'Jane'
  },
  {
    avatar:'',
    id:'3',
    name:'Leo'
  }
]

type TUser =  {
  id:string;
  avatar:string;
  name:string
}
export  function Users() {
  return (
    <div className="md:min-w-[50px] h-full border-r border-[#555555] bg-black">
       {
        users.map((user:TUser) => <div key={user.id} className="w-[50px] h-[50px] justify-center flex items-center border-b border-[#555555]">
          <div className="bg-white rounded-full w-[30px] h-[30px] flex items-center justify-center ">
            <span className="font-bold text-amber-400">
              {user.name[0].toUpperCase()}
            </span>
          </div>
       </div>)
       }
    </div>
  )
}
