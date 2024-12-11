import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';

    export default createBuilder(async (_options: {}, context: BuilderContext): Promise<BuilderOutput> => {
        context.logger.info('Running ngx-best-practices-corrector...');
        return { success: true };
    });