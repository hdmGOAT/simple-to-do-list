import { ReactEventHandler } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import ListPage from "./pages/ListPage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="justify-center flex">im alive</h1>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Add Todo
      </Button>
      <ListPage />

      <Card>
        <CardHeader>
          <CardTitle> Add something</CardTitle>
          <CardDescription>asdlfhaskfd</CardDescription>
        </CardHeader>
        <CardContent>asdfasdfs</CardContent>
        <CardFooter>asdfasf</CardFooter>
      </Card>
    </div>
  );
}

export default App;
