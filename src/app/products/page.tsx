import BookContainer from "@/components/BookContainer";
import GetBook from "@/handler/GetBook";
import damydata from "@/../public/damydata/data.json";


const page = () => {
  const data = damydata;

  return (
    <div className="flex  flex-wrap gap-5 mt-10 w-2/3 mx-auto justify-center">
        {data.map((Element) => {
          return (
            <div className=" w-80 h-96">
                <BookContainer
                ISBN={Element.ISBN}
                author={Element.author}
                image={Element.image}
                price={Element.price}
                summary={Element.summary}
                title={Element.title}
                key={Element.ISBN}
                />
            </div>
          );
        })}
    </div>
  );
};

export default page;
