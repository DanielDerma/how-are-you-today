import Arrow from "@/icons/Arrow";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

export default function MyModal({
  isOpen,
  setIsOpen,
  text,
  isCanInvoice,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  text: string;
  isCanInvoice?: boolean;
}) {
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-[#f6f6f6] p-6 align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="mb-4 text-lg font-medium leading-6 text-gray-900"
                >
                  {text}
                </Dialog.Title>
                <div role="status" className="flex justify-center">
                  {isCanInvoice ? (
                    <Link
                      href="/"
                      className="flex max-w-max items-center rounded-full border-2 border-black bg-black px-2"
                    >
                      <p className="mr-2 font-medium text-white">Go Home</p>
                      <Arrow className={`h-4 w-4  text-white`} />
                    </Link>
                  ) : (
                    <span className="inline-flex h-6 w-6 animate-perspective bg-black"></span>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
