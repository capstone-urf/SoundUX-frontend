import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface PlayerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  musicId: string;
}

const PlayerDialog = ({ isOpen, onClose, musicId }: PlayerDialogProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered={true}
    >
      <AlertDialogOverlay>
        <AlertDialogContent maxW="1080px">
          <iframe
            title="player"
            src={`${process.env.NEXT_PUBLIC_PLAYER_URL}${musicId}`}
            width="100%"
            height={220}
          />
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PlayerDialog;
