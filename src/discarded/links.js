/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

import { getAllDownloadLink } from '@/lib/fetch';

const Links = (props) => {
  const [downLoadLinks, setDownloadLinks] = useState(props.downLoadLinks || []);

  const getData = async () => {
    const { data, error } = await getAllDownloadLink();
    if (!error) {
      setDownloadLinks(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <br />
      <br />
      {downLoadLinks.length === 0 && (
        <div className="container text-center">
          <h4>No Links Available</h4>
        </div>
      )}

      {downLoadLinks.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-group">
                {downLoadLinks.map((dLink) => (
                  <li key={dLink.id} className="list-group-item mb-2">
                    <a
                      href={dLink.downloadLink}
                      target="_blank"
                      rel="noreferrer">
                      <div className="justify-content-between">
                        <h5 className="mb-1">{dLink.displayName}</h5>
                        <small className="text-muted"> {dLink.id} </small>
                      </div>
                      <p className="mb-1">{dLink.description}</p>
                      <small className="text-muted">{dLink.date}</small>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default Links;
export async function getStaticProps() {
  const { data, error } = await getAllDownloadLink();
  let downLoadLinks = [];
  if (!error) {
    downLoadLinks = data;
  }
  return {
    props: {
      downLoadLinks,
    },
    revalidate: 60,
  };
}
