import React from "react";
import { Header } from "@/widgets/header";
import { BookTracker } from "@/widgets/book-tracker";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { switchModal } from "@/features/modal/slice";

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.isOpened);
  return (
    <>
      <Header onAddBook={() => dispatch(switchModal())} />
      <main className="main">
        <BookTracker
          isModalOpen={isModalOpen}
          switchModal={() => dispatch(switchModal())}
        />
      </main>
    </>
  );
};
