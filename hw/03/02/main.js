const STUDENTS = [
    {
        slack: "arnie",
        name: "Армен Петросян",
        avatar: "https://github.com/ArmenPetrosyan.png",
        github: "https://github.com/ArmenPetrosyan",
        facebook: "https://www.facebook.com/armen.from.niko",
        email: "thebraincrasher@gmail.com"
    },
    {
        slack: "balaniuk",
        name: "Баланюк Андрей",
        avatar: "https://github.com/AndriiBalaniuk.png",
        github: "https://github.com/AndriiBalaniuk",
        facebook: "https://www.facebook.com/balaniuk",
        email: "andrei.balaniuk@gmail.com"
    },
    {
        slack: "ruslan_boiko",
        name: "Бойко Руслан",
        avatar: "https://github.com/marseille78.png",
        github: "https://github.com/marseille78",
        facebook: "https://www.facebook.com/profile.php?id=100001077106425",
        email: "boyko.ruslan78@gmail.com"
    },
    {
        slack: "sergey.k",
        name: "Камалтынов Сергей",
        avatar: "https://github.com/Gres.png",
        github: "https://github.com/Gres",
        facebook: "https://www.facebook.com/zlobnuyGres",
        email: "sergey.kamaltynov@dev-pro.net"
    },
    {
        slack: "alximik",
        name: "Гришаев Станислав",
        avatar: "https://github.com/alximik05.png",
        github: "https://github.com/alximik05",
        facebook: "https://www.facebook.com/stas.grishaev",
        email: "oalximiko@gmail.com"
    },
    {
        slack: "gummy",
        name: "Гуменюк Александр",
        avatar: "https://github.com/agumenyuk.png",
        github: "https://github.com/agumenyuk",
        facebook: "hhttps://www.facebook.com/countnev",
        email: "gumenyuk.alex@gmail.com"
    },
    {
        slack: "sergey",
        name: "Десятков Сергей",
        avatar: "https://github.com/desyatkov.png",
        github: "https://github.com/desyatkov",
        facebook: "https://www.facebook.com/desyatkov",
        email: "desyatkov@gmail.com"
    },
    {
        slack: "krom",
        name: "Зайцев Дмитро",
        avatar: "https://github.com/karmeljuk.png",
        github: "https://github.com/karmeljuk",
        facebook: "-",
        email: "karmeljuk@gmail.com"
    },
    {
        slack: "ruberoid7",
        name: "Максимов Алексей",
        avatar: "https://github.com/Ruberoid7.png",
        github: "https://github.com/Ruberoid7",
        facebook: "https://www.facebook.com/profile.php?id=100015881856553",
        email: "maksimovap@outlook.com"
    },
    {
        slack: "viram",
        name: "Михайляк Вера",
        avatar: "https://github.com/mviravtm.png",
        github: "https://github.com/mviravtm",
        facebook: "https://www.facebook.com/m.vira.v?ref=bookmarks",
        email: "m.vira.v1@gmail.com"
    },
    {
        slack: "shaggrath",
        name: "Мирза Сергей",
        avatar: "https://github.com/shaggrath2010.png",
        github: "https://github.com/shaggrath2010",
        facebook: "https://www.facebook.com/shaggrath",
        email: "shaggrath@mail.ru"
    },
    {
        slack: "iryna",
        name: "Мичкова Ирина",
        avatar: "https://github.com/pyatachok.png",
        github: "https://github.com/pyatachok",
        facebook: "https://www.facebook.com/irina.pyatachok",
        email: "mice@templatemonster.me"
    },
    {
        slack: "vlanemcev",
        name: "Немцев Влад",
        avatar: "https://github.com/vlanemcev.png",
        github: "https://github.com/vlanemcev",
        facebook: "www.facebook.com/vlanemcev",
        email: "vlanemcev@gmail.com"
    },
    {
        slack: "swistikkk",
        name: "Оберемко Виктор",
        avatar: "https://github.com/Swistikkk.png",
        github: "https://github.com/Swistikkk",
        facebook: "https://www.facebook.com/profile.php?id=100005222808506",
        email: "oberemkovictor@gmail.com"
    },
    {
        slack: "sergey.podgornyy",
        name: "Подгорный Сергей",
        avatar: "https://github.com/SergeyPodgornyy.png",
        github: "https://github.com/SergeyPodgornyy",
        facebook: "https://www.facebook.com/sebastian.meyer.16906",
        email: "sergey.podgornyy@yahoo.de"
    },
    {
        slack: "ridvanovskyy",
        name: "Ридвановский Влад",
        avatar: "https://github.com/Ridvanovskyy.png",
        github: "https://github.com/Ridvanovskyy",
        facebook: "https://www.facebook.com/ridvanovskyy",
        email: "rvlrv@yandex.com"
    },
    {
        slack: "starik",
        name: "Старокожев Сергей",
        avatar: "https://github.com/SerhiyStarokozhev.png",
        github: "https://github.com/SerhiyStarokozhev",
        facebook: "https://www.facebook.com/serhiy.starokozhev",
        email: "s.v.starokozhev@gmail.com"
    },
    {
        slack: "zumzat",
        name: "Сябро Валентин",
        avatar: "https://github.com/zumzat.png",
        github: "https://github.com/zumzat",
        facebook: "https://www.facebook.com/zumzat",
        email: "valentyn.siabro@digitalho.com"
    },
    {
        slack: "todor",
        name: "Ушаков Фёдор",
        avatar: "https://github.com/todorone.png",
        github: "https://github.com/todorone",
        facebook: "-",
        email: "hanuman@numagames.com"
    },
    {
        slack: "evgeniych",
        name: "Чорномор Євген",
        avatar: "https://github.com/pixlabteam.png",
        github: "https://github.com/pixlabteam",
        facebook: "https://www.facebook.com/eugene.chernomor.3",
        email: "eugeneweblab@gmail.com"
    },
    {
        slack: "tylerdurden",
        name: "Шимко Вадим",
        avatar: "https://github.com/vadymshymko.png",
        github: "https://github.com/vadymshymko",
        facebook: "https://www.facebook.com/vadymshymko",
        email: "vadymshymko@gmail.com"
    },
    {
        slack: "knplink",
        name: "Назарчук Владислав",
        avatar: "https://github.com/vladknp.png",
        github: "https://github.com/vladknp",
        facebook: "https://www.facebook.com/sunrise.dragon",
        email: "knplink@gmail.com"
    }
];

const Student = React.createClass({
    render() {
        const {
            slack,
            name,
            avatar,
            github,
            facebook,
            email
        } = this.props;
        return (
            <div>
                <div className="student container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="student-avatar img-fluid rounded" src={avatar} alt={name} />
                        </div>
                        <div className="col-sm-9">
                            <h3 className="student-name">{name}</h3>
                            <p className="student-location"><i className="fa fa-map-marker" aria-hidden="true"></i> {name}</p>
                            <div className="students-contacts">
                                <a href={facebook}><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                <a href={github}><i className="fa fa-github" aria-hidden="true"></i></a>
                                <a href={"mailto:"+email}><i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
const LiveSearch =  React.createClass({
    getInitialState(){
        return {
            value: ''
        }
    },
    handleChange(e) {
        this.setState({
            value: e.target.value
        });
        if (e.target.value)
            this.props.onSearch(e.target.value)
    },
    render() {
        return (
            <div className="container-search">
                <input type="search" onChange={this.handleChange} value={this.state.value} placeholder="Input name..." />
            </div>
        );
    }
});

const List = React.createClass({
    getInitialState(){
        return {
            students: STUDENTS
        }
    },
    handleSearch(searchStr){
        this.setState({
            students: STUDENTS.filter(student => student.name.toLowerCase().indexOf(searchStr.toLowerCase())!==-1)
        });
    },
    render() {
        return (
            <div className="container-list">
                <h1>Meet React Course Members</h1>
            <LiveSearch onSearch={this.handleSearch}  />
                {
                    this.state.students.map(student =>
                        <Student
                            key={student.email}
                            slack={student.slack}
                            name={student.name}
                            avatar={student.avatar}
                            github={student.github}
                            facebook={student.facebook}
                            email={student.email}
                        />
                    )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
