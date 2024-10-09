"use client";

import {
  PrismicRichText,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { useState, useEffect } from "react";

export default function MouAccordian({ activeTab }) {
  const [mou, { state, error }] = useAllPrismicDocumentsByType("mou");
  const [filteredMous, setFilteredMous] = useState([]);

  useEffect(() => {
    if (state === "loaded" && mou) {
      const filtered =
        activeTab === "All"
          ? mou
          : mou.filter((m) => m.data.continent === activeTab);
      setFilteredMous(filtered);
    }
  }, [mou, state, activeTab]);

  if (state === "loading") {
    return (
      <span className="loading mx-auto flex loading-ring loading-lg"></span>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!filteredMous || filteredMous.length === 0) {
    return <div>No MOUs found for the selected continent.</div>;
  }

  return (
    <div className="space-y-2">
      {filteredMous.map((mous) => (
        <div className="collapse collapse-arrow bg-base-200" key={mous.id}>
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">
            <PrismicRichText
              field={mous.data.mouname}
              components={{
                heading1: ({ children }) => <h2 className="">{children}</h2>,
              }}
            />
          </div>
          <div className="collapse-content space-y-2">
            <div>
              <p>
                <span className="font-bold">Year: </span>
                {mous.data.year}
              </p>
              <p>
                <span className="font-bold">Qs: </span>
                {mous.data.qs}
              </p>
              <p>
                <span className="font-bold">Department: </span>
                {mous.data.department}
              </p>
              <p>
                <span className="font-bold text-clip whitespace-nowrap">
                  Muj-nodal:{" "}
                </span>
                {mous.data.nodal}
              </p>
              <p>
                <span className="font-bold text-clip whitespace-nowrap">
                  Contact Number:{" "}
                </span>
                {mous.data.contact_number}
              </p>
            </div>
            <div>
              <a href={`mailto:${mous.data.email}`} className="btn btn-primary">
                Email
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
