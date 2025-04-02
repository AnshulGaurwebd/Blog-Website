function Welcome({ onGetPosts }) {
  return (
    <center>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">There are no posts</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Enter your posts to connect and to tell your stories to other
              readers.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                onClick={onGetPosts}
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Add Data From Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
export default Welcome;
