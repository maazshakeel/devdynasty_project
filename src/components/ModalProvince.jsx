export default function ModalProvince({ object , isOpen , setIsOpenHandlerFalse}) {
  if(!isOpen){
    return (
        <div className="w-full bg-black fixed bottom-0 rounded-tr-lg rounded-tl-lg overflow-hidden font-poppins hidden">
          <div className="w-full h-[400px] bg-white overflow-scroll">
            <div className="w-full h-[200px] bg-[url('https://source.unsplash.com/484x332?indonesian%20culture')] bg-cover bg-bottom relative">
              <a href="" className="text-white float-right mt-3 mr-5 cursor">
                X
              </a>
            </div>
            <div className="p-5">
              <h1 className="text-4xl font-bold">Baju Adat</h1>
              <p className="text-slate-400 mb-5">Baju Adat Dki Jakarta</p>
              <p className="mb-10">
                Baju adat pria Banten disebut dengan baju pangsi. Baju pangsi
                terdiri dari celana pangsi, baju pangsi, dan ikat kepala.
              </p>
              <div className="">
                <ul>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }else{
    return (
        <div className="w-full bg-black fixed bottom-0 rounded-tr-lg rounded-tl-lg overflow-hidden font-poppins">
          <div className="w-full h-[400px] bg-white overflow-scroll">
            <div className="w-full h-[200px] bg-[url('https://source.unsplash.com/484x332?indonesian%20culture')] bg-cover bg-bottom relative">
              <a href="#" className="text-white float-right mt-3 mr-5 cursor" onClick={setIsOpenHandlerFalse()}>
                X
              </a>
            </div>
            <div className="p-5">
              <h1 className="text-4xl font-bold">Baju Adat</h1>
              <p className="text-slate-400 mb-5">Baju Adat Dki Jakarta</p>
              <p className="mb-10">
                Baju adat pria Banten disebut dengan baju pangsi. Baju pangsi
                terdiri dari celana pangsi, baju pangsi, dan ikat kepala.
              </p>
              <div className="">
                <ul>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                  <li>
                    Celana pangsi terbuat dari kain katun atau linen berwarna hitam.
                    Celana pangsi memiliki panjang hingga mata kaki dan memiliki
                    potongan yang longgar.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
  }

}
