import { useAuth0 } from "@auth0/auth0-react";
import "./way.css";
function Way_to_post() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div class="text-center way ">
        <div class=" body">
          <h3 class="card-title">
            <b>“From Mind to Page: Stories that Matter”</b>
          </h3>
          <p class="card-text">
            Create your blog about wonders and wonderful stories.
          </p>

          <button
            class="btn btn-primary"
            type="button"
            onClick={() => loginWithRedirect()}
          >
            CREATE POST
          </button>
        </div>
      </div>
    </>
  );
}

export default Way_to_post;
