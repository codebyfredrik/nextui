const App = `import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Card
      isFooterBlurred
      radius="2xl"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden justify-between py-2 absolute before:rounded-xl rounded-xl bottom-1 w-[calc(100%_-_8px)] shadow-lg ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny" color="secondary" radius="full" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
