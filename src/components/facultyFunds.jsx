import {PrismicImage, PrismicRichText, useAllPrismicDocumentsByType} from "@prismicio/react";
import {useEffect, useState} from "react";

const FacultyFunds = () => {
    const [facultyFundDocuments, {state, error: fetchError}] = useAllPrismicDocumentsByType("facultyfunds");
    const [facultyfunds, setFacultyFunds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (state === "loaded") {
            setFacultyFunds(facultyFundDocuments);
            setLoading(false);
        } else if (state === "error") {
            setError(fetchError);
            setLoading(false);
        }
    }, [state, facultyFundDocuments, fetchError]);

    // useEffect(() => {
    //     console.log(facultyfunds);
    // }, [facultyfunds]);

    return (
        <div>
            <div className="space-y-2">
                {facultyfunds.map((faculty) => (
                    <div key={faculty.id}>
                        <div className="card card-side bg-base-100 shadow-xl">
                            <PrismicImage
                                className="w-[300px] aspect-[3/4] hidden md:flex rounded-l-2xl"
                                field={faculty.data.photo}
                                alt="poster"
                            />
                            <div className="card-body">
                                <div>
                                    <PrismicRichText
                                        field={faculty.data.name}
                                        components={{
                                            heading1: ({children}) => (
                                                <h2 className="card-title">{children}</h2>
                                            ),
                                        }}
                                    />
                                </div>
                                <p>
                                    <span className="font-bold">Country:</span>{" "}
                                    {faculty.data.country}
                                </p>

                                <p>
                                    <span className="font-bold">Description:</span>{" "}
                                    {faculty.data.description}
                                </p>


                                <div className="flex flex-col md:flex-row justify-start gap-y-2 md:gap-x-2">
                                    {/*<a href={faculty.data.form} target="_blank">*/}
                                    {/*    <button*/}
                                    {/*        className="btn btn-primary text-white w-max flex items-center justify-center">*/}
                                    {/*        <p>Form for data</p>*/}
                                    {/*        <svg*/}
                                    {/*            xmlns="http://www.w3.org/2000/svg"*/}
                                    {/*            viewBox="0 0 512 512"*/}
                                    {/*            height="15"*/}
                                    {/*            fill="white"*/}
                                    {/*        >*/}
                                    {/*            <path*/}
                                    {/*                d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>*/}
                                    {/*        </svg>*/}
                                    {/*    </button>*/}
                                    {/*</a>*/}
                                    <a href={faculty.data.link} target="_blank">
                                        <button
                                            className="btn btn-primary text-white w-max flex items-center justify-center">
                                            <p>Apply For Funding</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                                height="15"
                                                fill="white"
                                            >
                                                <path
                                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/>
                                            </svg>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyFunds;