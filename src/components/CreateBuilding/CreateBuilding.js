import React, {useState} from 'react';

import {Button, Container, Paper, TextField, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import css from "./CreateBuilding.module.css";
import {useNavigate, useParams} from "react-router-dom";

const CreateBuilding = () => {

    const [urls, setUrls] = useState([]);

    const {id} = useParams();
    const customerId = id;
    const [name, setName] = useState('');
    const [averageCheck, setAverageCheck] = useState('');
    const [schedule, setSchedule] = useState('');
    const [phone, setPhone] = useState('');

    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [street, setStreet] = useState('');
    const [buildingNumber, setBuildingNumber] = useState('');

    const [forWedding, setForWedding] = useState(false);
    const [forBirthDay, setForBirthDay] = useState(false);
    const [forParty, setForParty] = useState(false);
    const [forDating, setForDating] = useState(false);
    const [forBaptism, setForBaptism] = useState(false);
    const [forAnniversaries, setForAnniversaries] = useState(false);
    const [forChildren, setForChildren] = useState(false);
    const [forFamily, setForFamily] = useState(false);
    const [forFriends, setForFriends] = useState(false);

    const [wifi, setWifi] = useState(false);
    const [parking, setParking] = useState(false);
    const [liveMusic, setLiveMusic] = useState(false);
    const [withAnimal, setWithAnimal] = useState(false);


    function handleClick() {
        const location = {city, region, street, buildingNumber}
        const teg = {
            forWedding, forBirthDay, forParty, forDating, forBaptism,
            forAnniversaries, forChildren, forFamily, forFriends
        }
        const specifics = {wifi, parking, liveMusic, withAnimal}
        const photos = {urls}
        const building = {customerId, name, averageCheck, location, specifics, teg}
        console.log(building);
        console.log(location);
        console.log(specifics);
        console.log(photos);

        fetch(`http://localhost:8080/customer/${id}/addBuilding`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(building)

        }).then(() => {
            console.log("New Building added")
        })

    }

    function handleChange(e) {
        setUrls(arr => [URL.createObjectURL(e.target.files[0]), ...arr])
        console.log(urls);
    }

    return (
        <div>
            <Container>
                <Paper elevation={3} className={css.paperStyle}>
                    <h1 className={css.header}>Registration</h1>
                    <form className={css.Form} noValidate autoComplete="off">
                        <TextField className={css.Input} id="outlined-basic" label="Назва будівлі" variant="outlined"
                                   type={"text"} fullWidth
                                   value={name}
                                   onChange={(e) => setName(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Місто" variant="outlined"
                                   type={"text"} fullWidth
                                   value={city}
                                   onChange={(e) => setCity(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Область" variant="outlined"
                                   type={"text"} fullWidth
                                   value={region}
                                   onChange={(e) => setRegion(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Вулиця" variant="outlined"
                                   type={"text"} fullWidth
                                   value={street}
                                   onChange={(e) => setStreet(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Номер будівлі" variant="outlined"
                                   type={"text"} fullWidth
                                   value={buildingNumber}
                                   onChange={(e) => setBuildingNumber(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Середній чек" variant="outlined"
                                   type={"text"}
                                   fullWidth
                                   value={averageCheck}
                                   onChange={(e) => setAverageCheck(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Графік роботи" variant="outlined"
                                   type={"text"}
                                   fullWidth
                                   value={schedule}
                                   onChange={(e) => setSchedule(e.target.value)}
                        />
                        <TextField className={css.Input} id="outlined-basic" label="Номер телефону" variant="outlined"
                                   type={"text"}
                                   fullWidth
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                        />

                        <h2>Особливості</h2>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox name="wifi" value={wifi} onChange={() => setWifi(!wifi)}/>}
                                label="WI-FI"

                            />
                            <FormControlLabel control={<Checkbox name="parking" value={parking}
                                                                 onChange={() => setParking(!parking)}/>}
                                              label="Парковка"
                            />
                            <FormControlLabel control={<Checkbox name="liveMusic" value={liveMusic}
                                                                 onChange={() => setLiveMusic(!liveMusic)}/>}
                                              label="Жива музика"
                            />
                            <FormControlLabel control={<Checkbox name="withAnimal" value={withAnimal}
                                                                 onChange={() => setWithAnimal(!withAnimal)}/>}
                                              label="З тваринами"
                            />
                        </FormGroup>

                        <h2>Теги</h2>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="forWedding" value={forWedding}
                                                                 onChange={() => setForWedding(!forWedding)}/>}
                                              label="#ДляВесіль"
                            />
                            <FormControlLabel control={<Checkbox name="forBirthDay" value={forBirthDay}
                                                                 onChange={() => setForBirthDay(!forBirthDay)}/>}
                                              label="#ДляДнівНароджень"
                            />
                            <FormControlLabel control={<Checkbox name="forParty" value={forParty}
                                                                 onChange={() => setForParty(!forParty)}/>}
                                              label="#ДляВечірок"
                            />
                            <FormControlLabel control={<Checkbox name="forDating" value={forDating}
                                                                 onChange={() => setForDating(!forDating)}/>}
                                              label="#ДляПобачень"
                            />
                            <FormControlLabel control={<Checkbox name="forBaptism" value={forBaptism}
                                                                 onChange={() => setForBaptism(!forBaptism)}/>}
                                              label="#ДляХрестин"
                            />
                            <FormControlLabel control={<Checkbox name="forAnniversaries" value={forAnniversaries}
                                                                 onChange={() => setForAnniversaries(!forAnniversaries)}/>}
                                              label="#ДляЮвілеїв"
                            />
                            <FormControlLabel control={<Checkbox name="forChildren" value={forChildren}
                                                                 onChange={() => setForChildren(!forChildren)}/>}
                                              label="#ДляДітей"
                            />
                            <FormControlLabel control={<Checkbox name="forFamily" value={forFamily}
                                                                 onChange={() => setForFamily(!forFamily)}/>}
                                              label="#ДляСімей"
                            />
                            <FormControlLabel control={<Checkbox name="forFriends" value={forFriends}
                                                                 onChange={() => setForFriends(!forFriends)}/>}
                                              label="#ДляДрузів"
                            />
                        </FormGroup>

                        <div>
                            <h2>Додати фотографії</h2>
                            <div className={css.Images}>
                                {
                                    urls.map((url) => <img className={css.Img} src={url} alt={"photo"}/>)
                                }
                            </div>
                            <label htmlFor={"file-upload"} className={css.custom_file_upload}>
                                Завантажити зображення
                            </label>
                            <input id={"file-upload"} type={"file"} onChange={handleChange}/>
                        </div>
                        <Button className={css.Button} variant="contained" onClick={handleClick}>
                            Зберегти
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
};

export {CreateBuilding};