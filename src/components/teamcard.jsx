import {
  PrismicRichText,
  PrismicImage,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { useEffect, useState } from "react";

export default function Teamcard() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [members, { state, error: fetchError }] =
    useAllPrismicDocumentsByType("team");

  useEffect(() => {
    if (state === "loaded") {
      const sortedMembers = [...members].sort((a, b) => {
        const orderA = a.data.order || 999999;
        const orderB = b.data.order || 999999;
        return orderA - orderB;
      });
      setTeamMembers(sortedMembers);
      setIsLoading(false);
    } else if (state === "failed") {
      setError(fetchError);
      setIsLoading(false);
    }
  }, [members, state, fetchError]);

  const ImageWithSkeleton = ({ field, alt }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div className="w-40 h-40 overflow-hidden rounded-full relative">
        {!imageLoaded && (
          <div className="skeleton absolute inset-0 rounded-full" />
        )}
        <PrismicImage
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          field={field}
          alt={alt}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
    );
  };

  const renderTeamMemberCard = (member) => (
    <div
      className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
      key={member.id}
    >
      {member.data.image?.url ? (
        <ImageWithSkeleton
          field={member.data.image}
          alt={member.data.name?.[0]?.text || "Team member"}
        />
      ) : (
        <div className="skeleton w-40 h-40 rounded-full" />
      )}
      <div className="text-center space-y-2">
        {member.data.name ? (
          <PrismicRichText
            field={member.data.name}
            fallback="Team Member"
            components={{
              heading1: ({ children }) => (
                <h2 className="text-xl font-bold">{children}</h2>
              ),
            }}
          />
        ) : (
          <div className="skeleton h-6 w-32 mx-auto" />
        )}
        {member.data.position && (
          <p className="text-lg text-gray-600">{member.data.position}</p>
        )}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 space-y-4 bg-white rounded-lg shadow-lg"
            >
              <div className="skeleton w-40 h-40 rounded-full" />
              <div className="space-y-2">
                <div className="skeleton h-6 w-32" />
                <div className="skeleton h-4 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600">
        Error loading team members: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {teamMembers.length === 0 ? (
        <div className="text-center">No team members found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(renderTeamMemberCard)}
        </div>
      )}
    </div>
  );
}
