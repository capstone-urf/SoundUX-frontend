import {
  Flex,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  Spinner,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface ProgressDialogProps {
  isOpen: boolean;
  message?: string;
}

const ProgressDialog = ({ isOpen, message }: ProgressDialogProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={() => undefined}
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          maxW="md"
          p={6}
          mx={6}
          bgColor="transparent"
          shadow="none"
        >
          <Flex flexDir="column" gap="16px" alignItems="center">
            <Spinner color="white" size="xl" thickness="4px" />
            {message && (
              <Text color="white" fontSize="sm" fontWeight="medium">
                {message}
              </Text>
            )}
          </Flex>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ProgressDialog;
