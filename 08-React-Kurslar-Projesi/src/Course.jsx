import React from "react";

function Course({ course }) {
  // console.log(course);
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <img src={image} width={240} height={150} />
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <h3 className="course-price">{price} ₺</h3>
      <div className="course-link">
        <a href={link}>Satın almak için tıklayınız</a>
      </div>
    </div>
  );
}

export default Course;
