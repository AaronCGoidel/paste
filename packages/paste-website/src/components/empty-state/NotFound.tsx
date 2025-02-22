import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Breadcrumb, BreadcrumbItem} from '../breadcrumb';

const NotFound: React.FC<{}> = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
    </Breadcrumb>
    <Text
      fontSize="fontSize80"
      lineHeight="lineHeight80"
      fontWeight="fontWeightSemibold"
      color="colorText"
      mb="space90"
    >
      Oops, this page doesn&apos;t exist
    </Text>
    <Box>
      <Text>
        If you think you landed here in error, please let us know by{' '}
        <Anchor href="https://github.com/twilio-labs/paste/issues">filing an issue</Anchor>.
      </Text>
    </Box>
  </>
);

export {NotFound};
