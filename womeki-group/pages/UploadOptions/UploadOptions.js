import React from "react";
import Link from "next/link";

const UploadOptions = () => {
  return (
    <div>
      <div>
        <Link href="./Upload">Update News</Link>
      </div>
      <Link href="./Upload">Upload Blogs</Link>
    </div>
  );
};

export default UploadOptions;
