/**
 * Page for login
 * 
 * @author Kaleb W. kaleb@thepracticalit.com
 */
import memberService from '../../../services/member.service';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export default function Logout(props) {
    const navigate = useNavigate();

    useEffect(() => {
      memberService.logout();
      props.userLoggedIn(null);
      navigate("/home");
      return () => {}
    }, [])
    return (
        <>
      </>
    )
}
