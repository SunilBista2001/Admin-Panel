import Logo from "../../img/logo.png";
import ProfilePic from "../../img/user-pic.jpg";

function index() {
  return (
    <header className="header border-t-0">
      <div className="logo-container">
        <a href="../4.0.0" className="logo">
          <img src={Logo} width="75" height="35" alt="Porto Admin" />
        </a>
      </div>

      <div className="header-right">
        <ul className="notifications">
          <li>
            <a
              href="#"
              className="dropdown-toggle notification-icon"
              data-bs-toggle="dropdown"
            >
              <i className="bx bx-envelope"></i>
              <span className="badge">4</span>
            </a>

            <div className="dropdown-menu notification-menu">
              <div className="notification-title">
                <span className="float-end badge badge-default">230</span>
                Messages
              </div>

              <div className="content">
                <ul>
                  <li>
                    <a href="#" className="clearfix">
                      <figure className="image">
                        <img
                          src={ProfilePic}
                          alt="Joseph Doe Junior"
                          className="rounded-circle"
                        />
                      </figure>
                      <span className="title">Joseph Doe</span>
                      <span className="message">Lorem ipsum dolor sit.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="clearfix">
                      <figure className="image">
                        <img
                          src={ProfilePic}
                          alt="Joseph Junior"
                          className="rounded-circle"
                        />
                      </figure>
                      <span className="title">Joseph Junior</span>
                      <span className="message truncate">
                        Truncated message. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec sit amet lacinia
                        orci. Proin vestibulum eget risus non luctus. Nunc
                        cursus lacinia lacinia. Nulla molestie malesuada est ac
                        tincidunt. Quisque eget convallis diam, nec venenatis
                        risus. Vestibulum blandit faucibus est et malesuada. Sed
                        interdum cursus dui nec venenatis. Pellentesque non nisi
                        lobortis, rutrum eros ut, convallis nisi. Sed tellus
                        turpis, dignissim sit amet tristique quis, pretium id
                        est. Sed aliquam diam diam, sit amet faucibus tellus
                        ultricies eu. Aliquam lacinia nibh a metus bibendum, eu
                        commodo eros commodo. Sed commodo molestie elit, a
                        molestie lacus porttitor id. Donec facilisis varius
                        sapien, ac fringilla velit porttitor et. Nam tincidunt
                        gravida dui, sed pharetra odio pharetra nec. Duis
                        consectetur venenatis pharetra. Vestibulum egestas nisi
                        quis elementum elementum.
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="clearfix">
                      <figure className="image">
                        <img
                          src="img/!sample-user.jpg"
                          alt="Joe Junior"
                          className="rounded-circle"
                        />
                      </figure>
                      <span className="title">Joe Junior</span>
                      <span className="message">Lorem ipsum dolor sit.</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="clearfix">
                      <figure className="image">
                        <img
                          src="img/!sample-user.jpg"
                          alt="Joseph Junior"
                          className="rounded-circle"
                        />
                      </figure>
                      <span className="title">Joseph Junior</span>
                      <span className="message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec sit amet lacinia orci. Proin vestibulum eget risus
                        non luctus. Nunc cursus lacinia lacinia. Nulla molestie
                        malesuada est ac tincidunt. Quisque eget convallis diam.
                      </span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="text-end">
                  <a href="#" className="view-more">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="dropdown-toggle notification-icon"
              data-bs-toggle="dropdown"
            >
              <i className="bx bx-bell"></i>
              <span className="badge">3</span>
            </a>

            <div className="dropdown-menu notification-menu">
              <div className="notification-title">
                <span className="float-end badge badge-default">3</span>
                Alerts
              </div>

              <div className="content">
                <ul>
                  <li>
                    <a href="#" className="clearfix">
                      <div className="image">
                        <i className="fas fa-thumbs-down bg-danger text-light"></i>
                      </div>
                      <span className="title">Server is Down!</span>
                      <span className="message">Just now</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="clearfix">
                      <div className="image">
                        <i className="bx bx-lock bg-warning text-light"></i>
                      </div>
                      <span className="title">User Locked</span>
                      <span className="message">15 minutes ago</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="clearfix">
                      <div className="image">
                        <i className="fas fa-signal bg-success text-light"></i>
                      </div>
                      <span className="title">Connection Restaured</span>
                      <span className="message">10/10/2021</span>
                    </a>
                  </li>
                </ul>

                <hr />

                <div className="text-end">
                  <a href="#" className="view-more">
                    View All
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <span className="separator"></span>

        <div id="userbox" className="userbox">
          <a href="#" data-bs-toggle="dropdown">
            <figure className="profile-picture">
              <img
                src={ProfilePic}
                alt="Joseph Doe"
                className="rounded-circle"
                data-lock-picture="img/!logged-user.jpg"
              />
            </figure>
            <div
              className="profile-info"
              data-lock-name="John Doe"
              data-lock-email="johndoe@okler.com"
            >
              <span className="name">Sunil Bista</span>
              <span className="role">React Js Developer</span>
            </div>

            <i className="fa custom-caret"></i>
          </a>
          <div className="dropdown-menu">
            <ul className="list-unstyled mb-2">
              <li className="divider"></li>
              <li>
                <a role="menuitem" tabindex="-1" href="pages-user-profile.html">
                  <i className="bx bx-user-circle"></i> My Profile
                </a>
              </li>
              <li>
                <a role="menuitem" tabindex="-1" href="pages-signin.html">
                  <i className="bx bx-power-off"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default index;
