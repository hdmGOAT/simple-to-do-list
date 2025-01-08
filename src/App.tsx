import { ReactEventHandler, useState } from "react";
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
  const [isCardOpen, setCardOpen] = useState<Boolean>(false);

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="justify-center flex">im alive</h1>
      <Button
        onClick={() => {
          setCardOpen(true);
        }}
      >
        Add Todo
      </Button>
      <ListPage />

      {isCardOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 m-6">
          <Card className="max-w-lg w-full bg-white shadow-xl rounded-lg">
            <CardHeader>
              <div className="flex flex-row justify-between">
                <div>
                  <CardTitle>Add something</CardTitle>
                  <CardDescription>asdlfhaskfd</CardDescription>
                </div>
                <Button
                  onClick={() => {
                    setCardOpen(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
              asdfasdfsasdfasdfsasdfasdfsasdfasdfsasdfasdfs
            </CardContent>
            <CardFooter>asdfasf</CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
