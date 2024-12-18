import { getModelByName } from '@adminjs/prisma';
import { ResourceWithOptions } from 'adminjs';
import { TResourceInput } from '../types/adminjs.type.mjs';
import { targetRelationSettingsFeature } from '../features/adminjs-relation/index.mjs';

export const CommentResource = async (
  args: TResourceInput,
): Promise<ResourceWithOptions> => {
  return {
    resource: {
      model: getModelByName('Comment'),
      client: args.prismaService,
    },
    options: {
      navigation: {
        icon: 'Edit',
        name: 'Blog',
      },
      filterProperties: ['visible', 'post'],
    },
    features: [targetRelationSettingsFeature()],
  };
};

export default CommentResource;
