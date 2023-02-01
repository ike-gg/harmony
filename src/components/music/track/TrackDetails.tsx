import { FC } from "react";
import { Link } from "react-router-dom";
import Icon from "../../UI/Icon";

interface Props {
  detailsPage: string;
}

const TrackDetails: FC<Props> = ({ detailsPage }) => {
  return (
    <Link
      onClick={(e) => e.stopPropagation()}
      to={detailsPage}
      className="opacity-30 hover:opacity-100"
    >
      <Icon className="" iconName="info-circle" />
    </Link>
  );
};

export default TrackDetails;
