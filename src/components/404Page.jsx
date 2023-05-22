import { Link } from "@mui/material";
import { Fade } from "@successtar/react-reveal";

export default function NoPage() {
  return (
    <section className="hero flex flex-col sm:flex-row relative items-center justify-center h-screen">
      <Fade>
        <div
          className="cols items-center"
          style={{
            justifyContent: "center",
            padding: "10px",
            width: "100%",
            maxWidth: "unset",
            borderColor: "#333",
          }}
        >
          <h1 className="main-text text-center">404 - Page Not Found!</h1>

          <p
            className="py-8 text-center"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--light-text-color)",
              lineHeight: 2,
              maxWidth: "500px",
            }}
          >
            {`It seems you must have stumbled on a not-existent page. Please click the link below to return to the homepage.`}
          </p>

          <Link href="/home">Go to Homepage</Link>
        </div>
      </Fade>
    </section>
  );
}
