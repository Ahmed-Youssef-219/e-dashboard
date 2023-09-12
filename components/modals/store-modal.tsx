"use client";

import * as z from 'zod';
import { Modal } from "@/components/ui/Modal";
import { useStoreModal } from "@/hooks/use-store-madal";
import { useForm } from 'react-hook-form';

const formSchema = z.object({
    name: z.string().min(1)
})

export const StoreModal = () => {
  const storeModal = useStoreModal();

  const form = useForm()

  return (
    <Modal
      title="Create Store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create store form
    </Modal>
  );
};
