import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            {/* <div className="ten columns">
              <a href="mailto:bobby.khounphinith@gmail.com">Contact Me</a>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div>
            </aside> */}
            <form name="input" method="POST" action="https://formspree.io/bobby.khounphinith@gmail.com">
              Name: <input type="text" name="Name" placeholder="Your Name" />
              Email: <input type="email" name="_replyto" placeholder="Your Email" />
              Message: <textarea name="message" placeholder="Type your message"></textarea>
              <input type="submit" value="Send" />
              <input type="hidden" name="_subject" value="Enter your subject here" />
              <input type="hidden" name="_next" value="thanks.html" />
            </form>
          </div>
        </section>
        );
  }
}