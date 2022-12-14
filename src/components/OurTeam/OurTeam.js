import React from "react";
import "./OurTeam.css";
import abtm from "../../assets/images/abtm.jpg";
import vj from "../../assets/images/vj.jpg";
const OurTeam = () => {
  return (
    <div>
      <section class="section">
        <div class="container">
          <div class="section_header">
            <h2 class="title section_title">Our Expert Team</h2>
            <span class="section_hint">Nafa cordinators</span>{" "}
          </div>
          <div class="row">
            <div class="section_content teamy-team">
              <div class="col-md-3">
                <div class="teamy teamy_style1 teamy_mask-circle">
                  <div class="teamy_layout">
                    <div class="teamy_preview">
                      {" "}
                      <img
                        src={abtm}
                        class="teamy_avatar"
                        alt="The demo photo"
                      />{" "}
                    </div>
                    <div class="teamy_back">
                      <div class="teamy_back-inner">
                        {" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-facebook"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-dribbble"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-twitter"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-envelope-o"></i>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="teamy_content">
                    <h3 class="teamy_name">Suzan Lois</h3>
                    <span class="teamy_post">CEO/Founder</span>{" "}
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="teamy teamy_style1 teamy_mask-circle">
                  <div class="teamy_layout">
                    <div class="teamy_preview">
                      {" "}
                      <img
                        src={vj}
                        class="teamy_avatar"
                        alt="The demo photo"
                      />{" "}
                    </div>
                    <div class="teamy_back">
                      <div class="teamy_back-inner">
                        {" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-facebook"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-dribbble"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-twitter"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-envelope-o"></i>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="teamy_content">
                    <h3 class="teamy_name">Noel Flantier</h3>
                    <span class="teamy_post">Product Manager</span>{" "}
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="teamy teamy_style1 teamy_mask-circle">
                  <div class="teamy_layout">
                    <div class="teamy_preview">
                      {" "}
                      <img
                        src={abtm}
                        class="teamy_avatar"
                        alt="The demo photo"
                      />{" "}
                    </div>
                    <div class="teamy_back">
                      <div class="teamy_back-inner">
                        {" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-facebook"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-dribbble"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-twitter"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-envelope-o"></i>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="teamy_content">
                    <h3 class="teamy_name">Rosanna Pattie</h3>
                    <span class="teamy_post">Joomla Manager</span>{" "}
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="teamy teamy_style1 teamy_mask-circle">
                  <div class="teamy_layout">
                    <div class="teamy_preview">
                      {" "}
                      <img
                        src={vj}
                        class="teamy_avatar"
                        alt="The demo photo"
                      />{" "}
                    </div>
                    <div class="teamy_back">
                      <div class="teamy_back-inner">
                        {" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-facebook"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-dribbble"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-twitter"></i>{" "}
                        </a>{" "}
                        <a href="#0" class="social">
                          {" "}
                          <i class="fa fa-envelope-o"></i>{" "}
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="teamy_content">
                    <h3 class="teamy_name">Rose Alpha</h3>
                    <span class="teamy_post">Photographer</span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
