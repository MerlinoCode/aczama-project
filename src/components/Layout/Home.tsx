import './Home.scss'

interface Props {
  title: string;
  job: string;
}

function Header({ title, job }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <h4>{job}</h4>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header title="Teresa Aczama" job="Experta en Psicofísica"/>
    </div>
  );
}