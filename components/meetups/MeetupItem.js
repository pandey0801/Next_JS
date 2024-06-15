"use client";
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
// import { useParams } from 'react-router-dom';
import { useParams } from "next/navigation";
import Link from 'next/link';

function MeetupItem(props) {
  // const router = useParams();
  // function showDetails () {
  //   router.push('/' + props.id);
  // }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <button onClick={showDetails}>Show Details</button> */}
          <button>
          <Link href={`${props.id}`}>Show Details</Link>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
