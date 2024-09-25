import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";

const MouAccordian = () => {
  const [mou, { state, error }] = useAllPrismicDocumentsByType("mou");

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!mou || mou.length === 0) {
    return <div className="hidden">No mous's found.</div>;
  }
  return (
    <div className="space-y-2">
      {mou.map((mous) => (
        <div className="collapse collapse-arrow bg-base-200" key={mous.id}>
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <PrismicRichText
              field={mous.data.mouname}
              components={{
                heading1: ({ children }) => (
                  <h2 className="">{children}</h2>
                ),
              }}
            />{" "}
          </div>
          <div className="collapse-content space-y-2">
            <div>
              <p>
                <span className="font-bold">Qs: </span>
                {mous.data.qs}
              </p>
              <p>
                <span className="font-bold">Department: </span>
                {mous.data.department}
              </p>
              <p>
                <span className="font-bold text-clip text-nowrap ">
                  Muj-nodal:{" "}
                </span>
                {mous.data.nodal}
              </p>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary">
                <a href={mous.data.link}>MoU</a>
              </button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MouAccordian;
