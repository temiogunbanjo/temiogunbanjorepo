import { AiFillSafetyCertificate } from "react-icons/ai";
import { PieChart } from "react-minimal-pie-chart";

import {
  // HiOutlineLightningBolt as SkillBadgeIcon,
  HiLightningBolt as FeaturedSkillBadgeIcon,
} from "react-icons/hi";

import Image from "../common/Image";

const SkillCard = (props) => {
  const { onClick = () => {} } = props;
  const [skillPieWidth, skillPieHeight] = [14, 14];

  const getColor = (grade) => {
    switch (true) {
      case grade >= 0 && grade < 3.33:
        return "var(--light-text-color)";
      // return "gold";
      // return "#ff56cf";

      case grade >= 3.33 && grade < 6.67:
        return "var(--light-text-color)";
      // return "gold";
      // return "#ffdb56";

      case grade >= 6.67:
        return "var(--light-text-color)";
      // return "gold";
      // return "#79ff9f";

      default:
        return grade.color || "#E38627";
    }
  };

  return (
    <div
      className="card flex flex-row sm:flex-col mx-4 items-center"
      style={{
        borderRadius: "8px",
      }}
      onClick={onClick}
    >
      <div
        className="card-header flex sm:flex-row-reverse flex-col-reverse sm:mb-8 h-full sm:h-auto sm:w-full items-center justify-between px-10 sm:px-6 py-6 rounded-lg"
        style={{
          // width: "130px",
          borderRadius: "7px",
        }}
      >
        {!props.data?.featured ? (
          <FeaturedSkillBadgeIcon
            className="mt-4 sm:mt-0"
            style={{
              fontSize: "23px",
              color: "var(--contrast-text-color)",
            }}
          />
        ) : (
          <FeaturedSkillBadgeIcon
            style={{
              fontSize: "25px",
              color: "gold",
            }}
          />
        )}

        {props?.data?.icon && (
          <Image
            src={props?.data?.icon}
            alt={""}
            height="30px"
            style={{
              objectFit: "contain",
              width: "auto",
              height: "35px",
              minWidth: "35px",
            }}
          />
        )}
      </div>

      <div
        className="flex flex-row items-end justify-between w-full"
        style={{
          padding: "15px",
        }}
      >
        <div className="flex flex-col w-full">
          <b
            className="text-left text-2xl capitalize"
            style={{
              margin: 0,
              fontWeight: 400,
              color: "var(--text-color)",
              // fontSize: "15px",
            }}
          >
            {props.data?.name}
          </b>
          <span className="mt-3 text-lg capitalize text-left">
            {props.data?.tags[0]}
          </span>
          {props.data?.certifications?.length > 0 && (
            <span
              className="flex flex-row items-center mt-3 uppercase text-left text-md"
              style={{
                color: "var(--light-text-color)",
              }}
            >
              <AiFillSafetyCertificate
                className="text-lg"
                style={{ marginRight: "4px" }}
              />
              Certified Skill
            </span>
          )}
        </div>

        <div className="flex rounded-full">
          <PieChart
            totalValue={100}
            radius={skillPieWidth / 2 - 1.5}
            segmentsShift={(index) => (index !== 0 ? 0.3 : 0.3)}
            viewBoxSize={[skillPieWidth, skillPieHeight]}
            center={[skillPieWidth / 2, skillPieHeight / 2]}
            startAngle={-90}
            animate
            // lengthAngle={90}
            // label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
            // labelStyle={{
            //   fontSize: '6px',
            //   fill: 'var(--text-color)'
            // }}
            paddingAngle={5}
            lineWidth={10}
            data={[
              {
                title: "Mastered",
                value: props.data?.level * 10,
                color: getColor(props.data?.level),
              },
              {
                title: "Unmastered",
                value: 100 - props.data?.level * 10,
                color: "var(--border-line-color)",
              },
              // { title: 'Three', value: 10, color: '#6A2135' },
            ]}
            style={{ height: "58px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;