import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';




const user = [
    {
        name: 'Heidy Alejandra',
        lastname: 'Primo',
        email: 'hprimo10@outlook.com',
        tel: '300 456 7896',
        gender: 'woman'
    },
    {
        name: 'Juan carlos',
        lastname: 'Ramirez',
        email: 'juanca2@gmail.com',
        tel: '310 678 5432',
        gender: 'man'
    },
    {
        name: 'Miguel',
        lastname: 'Velez',
        email: 'miguelv@hotmail.com',
        tel: '345 678 1234',
        gender: 'man'
    },
];


const Users = () => {
    return (
        <div className='container'>
            <div className='py-4'>
               
                <h1>USERS</h1>
                
                
                <form> 
                   <div>
                       <label>First name:</label><br />
                        <input type="text" /> <br />
                    </div> 
                    <div> <br/>
                        <label for="lname">Last name:</label><br />
                       <input type="text" /><br /> <br />
                    </div>
                    <div>
                      <label for="email">Email:</label><br />
                    <input type="email" /><br /> <br />
                    </div>
                    <div> 
                      <label>Phone:</label><br />
                      <input type="tel" /> <br />
                    </div>
                    <div>
                     <FormControl component ="fieldset"><br/>
                      <FormLabel component="legend">Gender: </FormLabel>
                      <RadioGroup
                       aria-label="gender"
                       defaultValue="female"
                       name="radio-buttons-group"
                     >
                     <FormControlLabel value="female" control={<Radio />} label="Female" /> 
                     <FormControlLabel value="male" control={<Radio />} label="Male" />
                     <FormControlLabel value="other" control={<Radio />} label="Other" />
                     </RadioGroup>
                     </FormControl>
                     <br/>
                      <FormControl component="fieldset"><br/>
                      <FormLabel component="legend">Estate:</FormLabel>
                       <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="male" control={<Radio />} label="Active" />
                        <FormControlLabel value="other" control={<Radio />} label="No Active" />
                       </RadioGroup>
                     </FormControl>
                    </div>
                    <div><br /> <input type="submit" value="Submit" /></div>
                </form>
                <br/>
            </div>

        </div>

    );
};

export default Users;