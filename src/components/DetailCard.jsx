export default function detailCard({object}) {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-3 sm:w-[400px] sm:shrink-0">
      <div className="w-full h-[180px] bg-slate-200 overflow-hidden">
        <img
          src={object.img}
          alt=""
          width={"auto"}
          height={"auto"}
        />
      </div>
      <div className="p-5">
        <h1 className="text-3xl font-bold">{object.title}</h1>
        <p className="text-slate-300 mb-5">{object.subtitle}</p>

        <p>
            {object.description} <br />{" "}
          <a href="#" className="font-bold ">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}
