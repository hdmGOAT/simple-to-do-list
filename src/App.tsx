import { ChangeEvent, ReactEventHandler, useState } from "react";
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
import { Textarea } from "./components/ui/textarea";
import { ItemProps } from "./components/Item";
import { supabase } from "./createClient";

function App() {
  const [isCardOpen, setCardOpen] = useState<Boolean>(false);
  const [input, setInput] = useState<ItemProps>({
    title: "",
    body: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setInput((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    console.log(input);
    const { title, body } = input;

    const { data, error } = await supabase
      .from("todo")
      .insert([{ title: title, body: body }])
      .select();

    if (error) {
      console.error("error inserting todo item: ", error.message);
    }

    alert("uploaded!");
  };

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
              <div className="space-y-5">
                <Textarea
                  id="title"
                  onChange={handleChange}
                  placeholder="Type your Title here. "
                />
                <Textarea
                  id="body"
                  onChange={handleChange}
                  placeholder="Type your body here. "
                  className="h-7"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit}>Submit</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

export default App;
