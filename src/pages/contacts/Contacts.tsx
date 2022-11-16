import React from "react";
import GradientButton from "../../components/buttons/gradient/GradientButton";
import MainLayout from "../../components/layouts/main/MainLayout";
import "./style.scss";

const Contacts = () => {
  return (
    <MainLayout>
      <div className="contacts__wrapper">
        <div className="container__1200">
          <h1 className="contacts__title">Контакти</h1>
          <div className="contacts__block">
            <GradientButton link="https://github.com/Sp1ce21" isBlank>
              Github
            </GradientButton>
            <GradientButton link="mailto: spellmane21@gmail.com" isBlank>
              Email
            </GradientButton>
            <GradientButton
              link="https://www.linkedin.com/in/rostislav-gavryliuk-062365238/"
              isBlank
            >
              Linkedin
            </GradientButton>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contacts;
